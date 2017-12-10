import React, { Component } from 'react';

import './index.css';

let interval = null;

export default class extends Component {
  state = {
    position: 1
  }
  handleMouseEnter = () => {
    let count = 1;
    interval = setInterval(() => {
  		if (count <= 4) {
  			this.setState({ position: count });
  			count++;
  		} else {
  			count = 1;
  		}
  	}, 72);
  }
  handleMouseLeave = () => {
    clearInterval(interval);
    this.setState({ position: 1 });
  }
  render() {
    const { dragon } = this.props;
    return (
      <div className='dragon' id={`position-${this.state.position}`} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
    		<div className='wing-back'>
    			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 261.01 327.46'><path className='cls-3' d='M232,137.29s-63.72-89-216.53-126c0,0,51.51,87.69,12.88,199.29,0,0,102.2,17.7,127.41,101.88l82.39,7.29S218.28,205.9,232,137.29Z'/><path className='cls-4' d='M257.27,315.58a13,13,0,1,1-11.83-14.13A13,13,0,0,1,257.27,315.58Z'/><path className='cls-4' d='M236.67,145.2c13.78-8.28,24.34-1.42,24.34-1.42-1.7-20-21.16-19.24-28.57-17.35C178.4,57.56,61.4,8,0,0,38.43,51,41.29,162.74,14.31,217.45c32.81-.52,112.38,15.45,136.14,101.76l92.69,8.2c7.89-6.09,9.91-12.21,12.46-19.44C224,256.89,232.58,181.35,236.67,145.2ZM25.72,17.77c71.87,23.38,154.21,61,191.38,111.8-60,6-121.55,21-181.49,66.19C56.42,106.45,40.76,51.69,25.72,17.77ZM43.34,206.62c74.81-53,137.84-64.58,177.6-67.32-26,22.73-61.25,57.76-70.29,142.24C136.33,253.28,106.72,212,43.34,206.62ZM164.92,306c4.26-92.43,28.4-127.56,62.21-157.14-9.07,34-15.3,91.17.58,162.7Z'/></svg>
    		</div>

    		<div className='wing-back_bottom'>
    			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 244.55 371.08'><path className='cls-3' d='M207.37,6.94H131S122.28,138.26,14.28,189.45c0,0,77.74,45.85,91.77,162.17,0,0,100.54-112.82,105-206.93C211,144.69,191.59,68.32,207.37,6.94Z'/><path className='cls-4' d='M224,13A13,13,0,1,1,211,0,13,13,0,0,1,224,13Z'/><path className='cls-4' d='M216,129.46c-7.34-27-9.43-72.91,6.32-109.93C223.58,9.13,215.36,7.55,211,0H125.34C116.52,56.89,96.7,140.6,0,189.45c82.08,44.09,98.37,149.68,103.44,181.63,51.66-75.44,93.43-123.44,115-211.39,7-.31,26-3,26.1-23.36C244.55,136.33,226.85,144.89,216,129.46Zm-20.79-115c-8.47,46.27,1,95,7.6,114.46-31.56-15.2-64-63.71-65.76-114.46Zm-66.34,41.4c6.13,30.68,37.51,74.43,74.62,87.87-38,29.32-102.19,40.05-166.11,40.11C93,150.25,114.92,103.19,128.85,55.85Zm-18.79,278.8C102,279.72,71.93,226.11,39.1,202c54.14,1.29,131.64-16.43,165.93-45.78C188.5,234.82,149.42,278.34,110.06,334.65Z'/></svg>
    		</div>

    		<img className='horns-back' src={require(`../../../images/models/horns-back-${dragon.hornsType}.png`)} alt='' />
    		<img className='eye-back' src={require(`../../../images/models/eye-back-${dragon.eyesType}.png`)} alt='' />

    		<div className='body'>
    			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 729.7 436'>
    			<path className='cls-1' d='M474.22,8C232.54,8,8.54,218,8.54,218s10.83,71.81,228.83-23.85C202.23,381.06,307.54,428,412.17,428S721.7,409.31,721.7,260.88C721.7,158.63,656.71,8,474.22,8Z'/><path className='cls-2' d='M474.22,8C232.54,8,8.54,218,8.54,218s10.83,71.81,228.83-23.85C202.23,381.06,307.54,428,412.17,428S721.7,409.31,721.7,260.88C721.7,158.63,656.71,8,474.22,8Z'/></svg>
    		</div>

    		<img className='mouth' src={require(`../../../images/models/mouth-${dragon.mouthType}.png`)} alt='' />

    		<img className='stomach' src={require(`../../../images/models/stomach-1.png`)} alt='' />

    		<img className='shadow' src={require('../../../images/models/shadow-1.png')} alt='' />
    		<img className='horns-front' src={require(`../../../images/models/horns-front-${dragon.hornsType}.png`)} alt='' />
    		<img className='eye-front' src={require(`../../../images/models/eye-front-${dragon.eyesType}.png`)} alt='' />

    		<div className='wing-front'>
    			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 284.08 304.71'>
    			<path className='cls-3' d='M243.17,116.31s-71.31-83-226.8-106.38c0,0,59,82.8,30.4,197.37,0,0,103.36,8.63,135.9,90.26h82.7S235.57,185.87,243.17,116.31Z'/><path className='cls-4' d='M284.08,291.68a13,13,0,1,1-13-13A13,13,0,0,1,284.08,291.68Z'/><path className='cls-4' d='M248.55,123.78c13-9.46,24.11-3.56,24.11-3.56-3.45-19.75-22.77-17.3-30-14.77C182.77,41.62,61.87,2.57,0,0,42.77,47.39,55.47,158.47,33.42,215.34c32.63-3.41,113.3,5.49,144.57,89.37H271c7.33-6.76,8.8-13,10.7-20.47C245.79,236.15,247.66,160.15,248.55,123.78ZM27.18,15.43c73.65,17,159,47.16,200.5,94.5-59.24,11.3-119.23,31.66-175,81.93C65.58,101.06,45.16,47.9,27.18,15.43ZM61.38,202c69.85-59.33,131.61-76.48,171-82.72-23.87,24.94-55.92,62.94-57.48,147.89C158.12,240.28,125,201.8,61.38,202Zm129.86,88.26c-3.9-92.45,17-129.57,48.13-162-6,34.68-7.21,92.16,14.9,162Z'/></svg>
    		</div>

    		<div className='wing-front_center'>
    			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 301.7 148.1'><path className='cls-3' d='M239.27,17.12s-91.19-29-220.18,5.65c0,0,79.79,20.45,84.47,76,0,0,73.06-19.28,115.49,42.46,0,0,20.12-1.83,61.33-1.25C280.38,140,224.85,88.53,239.27,17.12Z'/><path className='cls-4' d='M301.7,135.07a13,13,0,1,1-13-13A13,13,0,0,1,301.7,135.07Z'/><path className='cls-4' d='M243.94,30.14c9.16-13.23,21.63-11.3,21.63-11.3C256,1.69,239,7.37,232.16,10.55,182.37-6.57,87.68-3.15,0,23c100.15,19.1,99,81.84,99,81.84-.34,0,86.51-24.89,116.71,43.3h73c1.68-5.77-6.28-21.79,4.72-25.17C274.29,117.51,240.82,92.32,243.94,30.14ZM108.14,81.82C101.38,60.73,71.58,30,42,24.14,110.54,6.21,185.84,6.05,222.48,18.52,180.55,27,134.25,54.54,108.14,81.82Zm101.79,33C197.7,97.38,163.43,84,119.79,88.49,154.66,56.73,185.57,37.87,230,25.31,219.76,48.1,207.88,75.09,209.93,114.84Zm13.32,18.81c-3.9-36,1.21-73.08,11.92-99-2.72,45.6,8.77,76.77,35.56,99Z'/></svg>
    		</div>

    		<div className='wing-front_bottom'>
    			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 244.55 371.08'><path className='cls-3' d='M207.37,6.94H131S122.28,138.26,14.28,189.45c0,0,77.74,45.85,91.77,162.17,0,0,100.54-112.82,105-206.93C211,144.69,191.58,68.32,207.37,6.94Z'/><path className='cls-4' d='M224,13A13,13,0,1,1,211,0,13,13,0,0,1,224,13Z'/><path className='cls-4' d='M216,129.46c-7.34-27-9.43-72.91,6.32-109.93C223.58,9.13,215.36,7.55,211,0H125.34C116.52,56.89,96.7,140.6,0,189.45c82.08,44.09,98.37,149.68,103.44,181.63,51.66-75.44,93.43-123.44,115-211.39,7-.31,26-3,26.1-23.36C244.55,136.33,226.85,144.89,216,129.46Zm-20.79-115c-8.48,46.27,1,95,7.6,114.46-31.57-15.2-64-63.71-65.76-114.46Zm-66.34,41.4c6.13,30.68,37.5,74.43,74.62,87.87-38,29.32-102.19,40.05-166.11,40.11C93,150.25,114.92,103.19,128.85,55.85Zm-18.79,278.8C102,279.72,71.93,226.11,39.1,202c54.14,1.29,131.64-16.43,165.93-45.78C188.5,234.82,149.42,278.34,110.06,334.65Z'/></svg>
    		</div>

    		<div className='wing-front_up'>
    			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 274.55 243.3'><path className='cls-3' d='M28.25,231.76S158.3,214.23,219.1,130.64c0,0,7.79-70.63,39-122.65,0,0-26.5,4.09-68.58,0C189.48,8,178.57,59,80,123,80,123,87.29,180.62,28.25,231.76Z'/><path className='cls-4' d='M274.55,13a13,13,0,1,1-13-13A13,13,0,0,1,274.55,13Z'/><path className='cls-4' d='M261.52,0h-76C174.08,40.53,119.93,99,70.14,118.4,93.13,185,7.31,233.36,0,243.3c76.18-7.6,184.75-50.4,218-103.3,7.45,2.83,23.75,6.58,32-10.33,0,0-12,4.89-22-9.95C239.22,78,248.43,49.59,271.18,21.77,269.35,17.81,263.67,5,261.52,0ZM49.1,218.55c30.39-30.78,40.67-60.27,38.77-85.92,39.79,8.08,85.83,10,121.29,1.42C181.69,172.43,96.11,213.29,49.1,218.55Zm45-98.39c48.27-27.28,72.81-55.47,88.35-81.78.15,19.72,10.78,65.64,26.76,87.07C171.32,132,118,128.21,94.11,120.16Zm121.48-.72c-12.47-19.88-22.51-90.88-20.17-105h51.73C238.88,35.74,219.1,93.52,215.59,119.44Z'/></svg>
    		</div>
      </div>
    );
  }
}
