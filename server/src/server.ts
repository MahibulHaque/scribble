import 'module-alias/register'

import express from 'express'
import { Server, type Socket } from 'socket.io'
import http from 'http'
import cors from 'cors'
import { z } from 'zod'

import type { DrawOptions, JoinRoomData } from '@/types'
import { joinRoomSchema } from '@/lib/validations/joinRoom'
import { addUser, getRoomMembers, getUser, removeUser } from '@/data/user'
import { addUndoPoint, getLastUndoPoint, deleteLastUndoPoint } from '@/data/undoPoints'

const app = express()

app.use(cors())

const server = http.createServer(app)

const io = new Server(server)

function isRoomCreated(roomId: string) {
  const rooms = [...io.sockets.adapter.rooms]
  return rooms?.some(room => room[0] === roomId)
}

function validateJoinRoomData(socket: Socket, joinRoomData: JoinRoomData) {
  try {
    return joinRoomSchema.parse(joinRoomData)
  } catch (error) {
    if (error instanceof z.ZodError) {
      socket.emit('invalid-data', {
        message: 'The entities you provided are not correct and cannot be processed',
      })
    }
  }
}

function joinRoom(socket: Socket, roomId: string, username: string) {
  socket.join(roomId)

  const user = {
    id: socket.id,
    username,
  }
  addUser({ ...user, roomId })
  const members = getRoomMembers(roomId)

  socket.emit('room-joined', { user, roomId, members })
  socket.to(roomId).emit('update-members', members)
  socket.to(roomId).emit('send-notification', {
    title: 'New member arrived!',
    message: `${username} joined the party.`,
  })
}

function leaveRoom(socket: Socket) {
    const user = getUser(socket.id)
    if (!user) return
  
    const { username, roomId } = user
  
    removeUser(socket.id)
    const members = getRoomMembers(roomId)
  
    socket.to(roomId).emit('update-members', members)
    socket.to(roomId).emit('send-notification', {
      title: 'Member departure!',
      message: `${username} left the party.`,
    })
    socket.leave(roomId)
  }