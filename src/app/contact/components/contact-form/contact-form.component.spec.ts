import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable submit button when the form is invalid', () => {
    component.contactForm.setValue({
      firstName: '',
      email: '',
    });
    expect(component.contactForm.valid).toBeFalsy();
    const submitButton = fixture.nativeElement.querySelector('button');
    expect(submitButton.disabled).toBeTruthy();
  });

  it('should call onSubmit method on form submission', () => {
    spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
