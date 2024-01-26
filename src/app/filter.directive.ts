import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[appFilter]',
  standalone: true,
})
export class FilterDirective {
  constructor(private el: ElementRef) {}

  @Input('appFilter') set search(value: string | null) {
    console.log(this.el.nativeElement.innerHTML)
    if (this.el.nativeElement.innerHTML) {
      let text: string = this.el.nativeElement.innerHTML.replace(
        '<span class="highlight">',
        '',
      )
      text = text.replace('</span>', '')

      console.log(text)

      if (typeof value === 'string' && value) {
        text = text.replace(
          new RegExp(value, 'gi'),
          `<span class="highlight">${value}</span>`,
        )
      }

      this.el.nativeElement.innerHTML = text
    }
  }
}
