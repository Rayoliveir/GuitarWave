// Carousel utility functions
export interface CarouselItem {
  name: string;
  image: string;
  description?: string;
}

export class CarouselController {
  private currentIndex: number = 0;
  private items: CarouselItem[];
  private autoPlayInterval: NodeJS.Timeout | null = null;
  private isPlaying: boolean = true;

  constructor(items: CarouselItem[]) {
    this.items = items;
  }

  getCurrentIndex(): number {
    return this.currentIndex;
  }

  getItems(): CarouselItem[] {
    return this.items;
  }

  next(): number {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    return this.currentIndex;
  }

  previous(): number {
    this.currentIndex = this.currentIndex === 0 
      ? this.items.length - 1 
      : this.currentIndex - 1;
    return this.currentIndex;
  }

  goTo(index: number): number {
    if (index >= 0 && index < this.items.length) {
      this.currentIndex = index;
    }
    return this.currentIndex;
  }

  startAutoPlay(interval: number = 4000): void {
    this.stopAutoPlay();
    this.isPlaying = true;
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, interval);
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
    this.isPlaying = false;
  }

  toggleAutoPlay(interval: number = 4000): boolean {
    if (this.isPlaying) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay(interval);
    }
    return this.isPlaying;
  }

  isAutoPlaying(): boolean {
    return this.isPlaying;
  }
}