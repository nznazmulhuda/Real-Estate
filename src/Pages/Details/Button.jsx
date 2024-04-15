import PropTypes from "prop-types";

function Button({ toolTip, children, sec }) {
    return (
        <button
            className="hover:bg-[#3270FC] p-2 relative w-[28px] h-[28px] rounded-lg lg:tooltip tooltip-right hover:text-white"
            data-tip={toolTip}
        >
            <a href={sec}>{children}</a>
        </button>
    );
}

Button.propTypes = {
    toolTip: PropTypes.string,
    sec: PropTypes.string,
    children: PropTypes.node,
};

export default Button;
