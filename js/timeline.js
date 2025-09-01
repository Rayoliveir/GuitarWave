// Timeline utility functions
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category?: string;
}

export class TimelineController {
  events: TimelineEvent[];
  activeIndex: number | null = null;

  constructor(events) {
    this.events = events;
  }

  getEvents(){
    return this.events;
  }

  getActiveIndex(){
    return this.activeIndex;
  }

  setActive(index){
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  getActiveEvent(){
    return this.activeIndex !== null ? this.events[this.activeIndex] : null;
  }

  // Filter events by category
  filterByCategory(category){
    return this.events.filter(event => event.category === category);
  }

  // Get events in a specific year range
  getEventsInRange(startYear, endYear){
    return this.events.filter(event => {
      const year = parseInt(event.year.replace(/\D/g, ''));
      return year >= startYear && year <= endYear;
    });
  }
}

// Smooth scroll to timeline element
export const scrollToTimelineEvent = (index) => {
  const element = document.querySelector(`#timeline-step-${index}`);
  if (element) {
    element.scrollIntoView({
      behavior,
      block,
      inline);
  }
};