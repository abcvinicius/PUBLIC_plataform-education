export default function ScriptFooter (){

	class StickyNavigation {
	  constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		document.querySelectorAll('.et-hero-tab').forEach(function(tab){
		  tab.addEventListener('click', function(event){
			self.onTabClick(event, this); 
		  });
		});
		window.addEventListener('scroll', () => { this.onScroll(); });
		window.addEventListener('resize', () => { this.onResize(); });
	  }
  
	  onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = document.querySelector(element.getAttribute('href')).offsetTop - this.tabContainerHeight + 1;
		window.scrollTo({top: scrollTop, behavior: 'smooth'});
	  }
  
	  onScroll() {
		this.checkTabContainerPosition();
		this.findCurrentTabSelector();
	  }
  
	  onResize() {
		if(this.currentId) {
		  this.setSliderCss();
		}
	  }
  
	  checkTabContainerPosition() {
		let offset = document.querySelector('.et-hero-tabs').offsetTop + document.querySelector('.et-hero-tabs').offsetHeight - this.tabContainerHeight;
		if(window.pageYOffset > offset) {
		  document.querySelector('.et-hero-tabs-container').classList.add('et-hero-tabs-container--top');
		} 
		else {
		  document.querySelector('.et-hero-tabs-container').classList.remove('et-hero-tabs-container--top');
		}
	  }
  
	  findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		document.querySelectorAll('.et-hero-tab').forEach(function(tab){
		  let id = tab.getAttribute('href');
		  let offsetTop = document.querySelector(id).offsetTop - self.tabContainerHeight;
		  let offsetBottom = document.querySelector(id).offsetTop + document.querySelector(id).offsetHeight - self.tabContainerHeight;
		  if(window.pageYOffset > offsetTop && window.pageYOffset < offsetBottom) {
			newCurrentId = id;
			newCurrentTab = tab;
		  }
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
		  this.currentId = newCurrentId;
		  this.currentTab = newCurrentTab;
		  this.setSliderCss();
		}
	  }
  
	  setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
		  width = this.currentTab.offsetWidth;
		  left = this.currentTab.offsetLeft;
		}
		document.querySelector('.et-hero-tab-slider').style.width = `${width}px`;
		document.querySelector('.et-hero-tab-slider').style.left = `${left}px`;
	  }
	}
  
	new StickyNavigation();
  }