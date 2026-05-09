import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable section wrapper component for consistent spacing and styling
 * Provides semantic HTML structure with customizable options
 */
const SectionWrapper = ({
    children,
    className = '',
    bgColor = 'transparent',
    fullHeight = false,
    padding = 'default',
    as = 'section',
    id = '',
    ariaLabel = ''
}) => {
    const Component = as;

    // Padding variations
    const paddingClasses = {
        none: '',
        small: 'py-10 px-4',
        default: 'py-20 px-4',
        large: 'py-32 px-4',
    };

    // Background color variations
    const bgColorClasses = {
        transparent: 'bg-transparent',
        dark: 'bg-[#0F1011]',
        darker: 'bg-[#151617]',
        primary: 'bg-[#f0f4ef]',
    };

    const classes = `
    ${paddingClasses[padding] || paddingClasses.default}
    ${bgColorClasses[bgColor] || bgColorClasses.transparent}
    ${fullHeight ? 'min-h-screen' : ''}
    ${className}
  `.trim();

    return (
        <Component
            className={classes}
            id={id}
            aria-label={ariaLabel || undefined}
        >
            {children}
        </Component>
    );
};

SectionWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    bgColor: PropTypes.oneOf(['transparent', 'dark', 'darker', 'primary']),
    fullHeight: PropTypes.bool,
    padding: PropTypes.oneOf(['none', 'small', 'default', 'large']),
    as: PropTypes.string,
    id: PropTypes.string,
    ariaLabel: PropTypes.string,
};

export default SectionWrapper;
