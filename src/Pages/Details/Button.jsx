import PropTypes from "prop-types";

function Button({ toolTip, children, sec }) {
    return (
        <a href={sec}>
            <button
                className="hover:bg-[#3270FC] p-2 relative w-[28px] h-[28px] rounded-lg lg:tooltip tooltip-right hover:text-white"
                data-tip={toolTip}
            >
                {children}
            </button>
        </a>
    );
}

Button.propTypes = {
    toolTip: PropTypes.string,
    sec: PropTypes.string,
    children: PropTypes.node,
};

export default Button;
