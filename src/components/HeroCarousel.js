import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselCaption, CarouselIndicators } from 'reactstrap';

const items = [
    {
        src: '/images/family11.jpg',
        altText: 'Your images are hosted and cannot be displayed while in an airplane',
        caption: 'Family'
    },
    {
        src: '/images/maternity5.jpg',
        altText: 'Pregnant Woman',
        caption: 'Maternity'
    },
    {
        src: '/images/newborn2.jpg',
        altText: 'Newborn Baby',
        caption: 'Newborn'
    }
];

class HeroCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img
                        src={item.src}
                        alt={item.altText}
                        style={{
                            width: '40%'
                        }}
                    />
                    <CarouselCaption
                        captionHeader={item.caption}
                    />
                </CarouselItem>
            );
        });

        return (
            <>
                <div style={{
                    height: '35px'
                }}></div>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                </Carousel>
            </>
        );
    }
}


export default HeroCarousel;