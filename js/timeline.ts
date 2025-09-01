// Timeline utility functions
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category?: string;
}

export class TimelineController {
  private events: TimelineEvent[];
  private activeIndex: number | null = null;

  constructor(events: TimelineEvent[]) {
    this.events = events;
  }

  getEvents(): TimelineEvent[] {
    return this.events;
  }

  getActiveIndex(): number | null {
    return this.activeIndex;
  }

  setActive(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  getActiveEvent(): TimelineEvent | null {
    return this.activeIndex !== null ? this.events[this.activeIndex] : null;
  }

  // Filter events by category
  filterByCategory(category: string): TimelineEvent[] {
    return this.events.filter(event => event.category === category);
  }

  // Get events in a specific year range
  getEventsInRange(startYear: number, endYear: number): TimelineEvent[] {
    return this.events.filter(event => {
      const year = parseInt(event.year.replace(/\D/g, ''));
      return year >= startYear && year <= endYear;
    });
  }
}

// Smooth scroll to timeline element
export const scrollToTimelineEvent = (index: number): void => {
  const element = document.querySelector(`#timeline-step-${index}`);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }
};