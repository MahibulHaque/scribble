import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { dynamicRoomIdGuardGuard } from './dynamic-room-id-guard.guard';

describe('dynamicRoomIdGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => dynamicRoomIdGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
