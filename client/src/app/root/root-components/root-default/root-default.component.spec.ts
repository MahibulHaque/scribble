import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RootDefaultComponent } from "./root-default.component";

describe("RootDefaultComponent", () => {
    let component: RootDefaultComponent;
    let fixture: ComponentFixture<RootDefaultComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RootDefaultComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(RootDefaultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
