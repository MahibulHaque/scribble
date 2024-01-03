import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-create-room-form',
	templateUrl: './create-room-form.component.html',
	styleUrl: './create-room-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateRoomFormComponent {
	isLoading: boolean = false;
	@Input({ required: true }) roomId!: string;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {}

	createRoomForm = this.fb.nonNullable.group({
		username: ['', Validators.required]
	});

	onSubmit(): void {}
}
