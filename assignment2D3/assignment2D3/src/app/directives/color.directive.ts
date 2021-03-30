import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector:'[appColor]'   
})

export class ColorDirective{
    constructor(private elementref:ElementRef){}

    @HostListener('mouseenter')onMouseEnter(){
        this.elementref.nativeElement.style.backgroundColor= "#ffff99";
        this.elementref.nativeElement.style.fontWeight= "bold";
    }
    @HostListener('mouseleave')onMouseLeave(){
        this.elementref.nativeElement.style.backgroundColor= "white";
        this.elementref.nativeElement.style.fontWeight= "initial";
    }

}

