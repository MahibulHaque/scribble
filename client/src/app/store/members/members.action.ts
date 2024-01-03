// members.actions.ts
import { createAction, props } from '@ngrx/store';
import { User } from '../../data-models/user.interface';

export const setMembers = createAction('[Members] Set Members', props<{ members: User[] }>());