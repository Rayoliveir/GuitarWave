export class CarouselController {
  currentIndex = 0;
  items = [];
  autoPlayInterval = null;
  isPlaying = true;

  constructor(items) {
    this.items = items;
  }

  getCurrentIndex() {
    return this.currentIndex;
  }

  getItems() {
    return this.items;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    return this.currentIndex;
  }

  previous() {
    this.currentIndex = this.currentIndex === 0
      ? this.items.length - 1
      : this.currentIndex - 1;
    return this.currentIndex;
  }

  goTo(index) {
    if (index >= 0 && index < this.items.length) {
      this.currentIndex = index;
    }
    return this.currentIndex;
  }

  startAutoPlay(interval = 4000) {
    this.stopAutoPlay();
    this.isPlaying = true;
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, interval);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
    this.isPlaying = false;
  }

  toggleAutoPlay(interval = 4000) {
    if (this.isPlaying) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay(interval);
    }
    return this.isPlaying;
  }

  isAutoPlaying() {
    return this.isPlaying;
  }
}