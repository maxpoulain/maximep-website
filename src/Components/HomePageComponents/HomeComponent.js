import React from 'react';
import HomeSectionComponent from './HomeSectionComponent';
import AboutComponent from './AboutComponent';
import EducationExperienceComponent from './EducationExperienceComponent';
import BlogCardsComponent from './BlogCardsComponent';

function HomeComponent() {
    return (
        <div>
            <HomeSectionComponent />
            <AboutComponent />
            <EducationExperienceComponent />
            <BlogCardsComponent />
        </div>
    )
}

export default HomeComponent;