import React from "react";

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div>
            {props.message}
        </div>
    )
}

export default Message