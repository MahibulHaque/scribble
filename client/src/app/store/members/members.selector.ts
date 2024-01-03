import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../../data-models/user.interface';
import * as MembersActions from './members.action';

export interface MembersState {
	members: User[];
}

export const initialState: MembersState = {
	members: []
};

const membersFeature = createFeature({
	name: 'members',
	reducer: createReducer(
		initialState,
		on(MembersActions.setMembers, (state, { members }) => ({ ...state, members }))
	)
});

export const { name: membersFeatureKey, reducer: membersReducers, selectMembers } = membersFeature;
