import { DragDropService, DragData } from './../drag-drop.service';
import { Directive, HostListener, ElementRef, Renderer2, Input, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[app-droppable][dropTags][dragEnterClass]'
})
export class DropDirective {
  @Output() dropped = new EventEmitter<DragData>();
  @Input() dragEnterClass: string;
  @Input() dropTags: string[] = [];
  private data$;

  constructor(
    private el: ElementRef, 
    private rd: Renderer2,
    private service: DragDropService) { 
      this.data$ = this.service.getDragData().take(1);
    }

  @HostListener('dragenter', ['$event'])
  ondragenter(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if(this.el.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        if(this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
        }
      })
    }
  }

  @HostListener('dragover', ['$event'])
  ondragover(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if(this.el.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(ev, 'dataTransger.dropEffect', 'move');
        } else {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
          this.rd.setProperty(ev, 'dataTransger.dropEffect', 'none');
        }
      })
    }
  }

  @HostListener('dragleave', ['$event'])
  ondragleave(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if(this.el.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
        }
      })
    }
  }

  @HostListener('drop', ['$event'])
  ondrop(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if(this.el.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
        this.service.clearDragData();
        this.dropped.emit(dragData);
      })
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

}
