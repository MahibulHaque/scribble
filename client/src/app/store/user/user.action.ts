// user.actions.ts
import { createAction, props } from '@ngrx/store';
import { User } from '../../data-models/user.interface';

export const setUser = createAction('[User] Set User', props<{ user: User }>());
export const clearUser = createAction('[User] Clear User');