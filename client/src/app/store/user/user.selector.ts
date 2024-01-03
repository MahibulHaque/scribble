// user.reducer.ts
import { createFeature, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.action';
import { User } from '../../data-models/user.interface';

export interface UserState {
	user: User | null;
}

export const initialState: UserState = {
	user: null
};

const userFeature = createFeature({
	name: 'user',
	reducer: createReducer(
		initialState,
		on(UserActions.setUser, (state, { user }) => ({ ...state, user })),
		on(UserActions.clearUser, (state) => ({ ...state, user: null }))
	)
});

export const { name: userFeatureKey, reducer: userReducer, selectUser } = userFeature;
