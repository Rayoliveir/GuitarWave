

/**
 * @typedef {Object} TimelineEvent
 * @property {string} year
 * @property {string} title
 * @property {string} description
 * @property {string} [category]
 */

export class TimelineController {
  events;
  activeIndex = null;

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

  filterByCategory(category){
    return this.events.filter(event => event.category === category);
  }

  getEventsInRange(startYear, endYear){
    return this.events.filter(event => {
      const year = parseInt(event.year.replace(/\D/g, ''));
      return year >= startYear && year <= endYear;
    });
  }
}

export const scrollToTimelineEvent = (index) => {
  const element = document.querySelector(`#timeline-step-${index}`);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  }
};