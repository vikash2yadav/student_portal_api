exports.STATUS_CODES = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,
    EARLY_HINTS: 103,

    SUCCESS: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTI_STATUS: 207,
    ALREADY_REPORTED: 208,
    IM_USED: 226,

    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    CONFLICT: 409,
    PRECONDITION_FAILED: 412,
    VALIDATION_ERROR: 432,
    NOT_VALID_DATA: 422,

    SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
}

exports.STATUS_MESSAGES = {
    STUDENT: {
        ADD: "Student Added Successfully",
        UPDATE: "Student Updated Successfully",
        DELETE: "Student Deleted Successfully",
        STATUS_CHANGE: "Student Status Changed Successfully"
    },
    SUBJECT: {
        ADD: "Subject Added Successfully",
        UPDATE: "Subject Updated Successfully",
        DELETE: "Subject Deleted Successfully",
        STATUS_CHANGE: "Subject Status Changed Successfully"
    },
    MARKS: {
        ADD: "Mark Added Successfully"
    },
    EXITS: {
        STUDENT: 'Email Already Exist',
        SUBJECT: 'Subject Already Exist',
        SUB_CODE: "Subject code exist"
    },
    NOT_FOUND: {
        STUDENT: "Student Not Found",
        SUBJECT: "Subject Not Found"
    },
    NOT_VALID: {
        MARKS: 'Marks data not valid'
    }
}
