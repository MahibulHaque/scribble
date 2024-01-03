import { TestBed } from "@angular/core/testing";

import { RootUiService } from "./root-ui.service";

describe("RootUiService", () => {
    let service: RootUiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RootUiService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
