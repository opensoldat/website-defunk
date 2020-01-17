import React from "react";
import PropTypes from "prop-types"
import classNames from 'classnames';

class Section extends React.Component {

    render() {
        const _typeClass = this.props.type ? 'o-section--'+ this.props.type : '';
        const _className = classNames("o-section", this.props.className, _typeClass);
        return (
            <section {...this.props} className={_className}>
                <div className="o-wrapper">
                    { this.props.heading ?
                        <h2 className="o-section__heading">{this.props.heading}</h2> : null }
                    {this.props.children}
                </div>
            </section>
        );
    }

}

Section.propTypes = {
    heading: PropTypes.node,
    type: PropTypes.string,
};

export default Section