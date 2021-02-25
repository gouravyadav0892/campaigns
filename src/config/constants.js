const BASE_URL = process.env.REACT_APP_API_BASEURL
const SEARCH_BASE_URL = process.env.REACT_APP_API_SEARCH_BASEURL
const USER_BASE_URL = process.env.REACT_APP_API_USER_BASEURL
export const APP_NAME = process.env.REACT_APP_NAME
export const IDENTITY_URL = process.env.REACT_APP_IDENTITY_URL
export const REACT_REFRESH_TOKEN_URL = process.env.REACT_APP_REFRESH_TOKEN_URL


export const UPLOAD_FILE_URL = BASE_URL + "files"
export const RECENT_UPLOADS_URL = BASE_URL + "files"
export const GET_FILEMETADATA_URL = BASE_URL + "files/<file_id>" 
export const GET_INSIGHTS_URL = BASE_URL + "files/<file_id>/insights/<insight_type>"
export const UPDATE_INSIGHTS_URL = BASE_URL + "insights/<insight_id>"

export const GET_DATASET_TYPE = BASE_URL + "data-set-types"
export const CREATE_NEW_DATASET = BASE_URL + "data-sets"
export const FETCH_USER_DATASETS = BASE_URL + "data-sets" 
export const FETCH_DATASET_DETAILS = BASE_URL + "data-sets/<data_set_id>" 
export const FETCH_DATASET_OPERATION = BASE_URL + "data-set-types/<data_set_type_id>/operation"
export const FETCH_DATASET_FILES = BASE_URL + "data-sets/<data_set_id>/files"
export const EXPORT_INSIGHTS =  BASE_URL + "data-sets/<data_set_id>/exportinsights"
export const UPLOAD_FILES_TO_DATASET = BASE_URL + "data-sets/<data_set_id>/files"
export const CREATE_NEW_JOB = BASE_URL + "data-sets/<data_set_id>/jobs"
export const FETCH_DATASET_JOBS = BASE_URL + "data-sets/<data_set_id>/jobs"
export const FETCH_FILES_STATUS_IN_JOB = BASE_URL + "data-sets/<data_set_id>/jobs/<job_id>/files"
export const FETCH_DATASET_MULTISTEP = BASE_URL + "data-sets/<data_set_id>/files/<file_id>/steps"
export const GET_CONFIGURATION = BASE_URL + "configuration"
export const RANK_INSIGHTS = BASE_URL + "data-sets/<data_set_id>/rank"
export const FETCH_DEMO_STATUS =  BASE_URL + "demos"
export const SWITCH_DEMO_STATUS = BASE_URL + "demos/action"
export const FETCH_FILES_DATA = BASE_URL + "search"
export const FETCH_DEMO_DETAILS = BASE_URL + "demos/<demo_id>" 

export const SEARCH = SEARCH_BASE_URL + "search"

export const AMZ_META_ID = 'x-amz-meta-id'
export const VIDEO_METADATA_OPERATIONS = [{"name":"video-transcription"}]

export const HOME_PAGE = "/"
export const DATABOOK_PAGE = '/databook'
export const OTP_VERIFICATION_PAGE = "/login/otp-verification"
//export const RESET_PASSWORD_PAGE = 'login/reset-password'
// export const AUTHENTICATE_USER = BASE_URL + "users/authenticate"

//// User end points /////////////////////////////////////////////////////

export const AUTHENTICATE_USER = USER_BASE_URL + "users/authenticate"
export const FORGOT_PASSWORD = USER_BASE_URL + "users/forgot-password"
export const VERIFY_OTP = USER_BASE_URL + "users/verify-otp"
export const RESET_PASSWORD = USER_BASE_URL + "users/reset-password"
export const GET_USERS_LIST = USER_BASE_URL + "users"
export const CREATE_NEW_USER = USER_BASE_URL + "users"
export const REFRESH_TOKEN_URL = USER_BASE_URL + "users/refresh-token"

//////////////User Role //////////////////////////////////////////////////
export const USER_ROLES_LIST =  USER_BASE_URL + "users/roles"
export const ASSIGN_ROLE = USER_BASE_URL + "users/roles"
export const USER_ROLE = USER_BASE_URL + "users/<user_id>/roles"

export const AuthObj = {
    'domain': process.env.REACT_APP_AUTH_DOMAIN,
    'clientID': process.env.REACT_APP_AUTH_CLIENT_ID,
    'audience': process.env.REACT_APP_AUTH_AUDIENCE,
    'callback': process.env.REACT_APP_AUTH_CALLBACK,
    'logoutCallback': process.env.REACT_APP_AUTH_LOG_OUT_CALLBACK,
    'responseType': process.env.REACT_APP_AUTH_RESPONSE_TYPE,
    'scope': process.env.REACT_APP_AUTH_SCOPE
}

export const AUTH_ACCESS_TOKEN_KEY = "access_token"
export const AUTH_EXPIRES_AT_KEY = "expires_at"
export const AUTH_ID_TOKEN_KEY = "id_token"
export const AUTH_REFRESH_TOKEN_KEY = "refresh_token"

export const TOKEN_EXPIRE = "Token expired."

export const ViewType = {
    "video": 'video',
    "ocr_banking_odx":'ocr_banking_odx',
    "invoice_ocr":'invoice_ocr',
    'excel_data_extraction':'excel_data_extraction',
    "jal_sentiments":'jal_sentiments',
    "ner_lufthansa_cargo":'ner_lufthansa_cargo'
}

///////////////////////Role/////////////////////////////////////////

export const ROLE_LIST = USER_BASE_URL + "roles"
export const ROLE = USER_BASE_URL + "roles"
export const ROLE_PERMISSION = USER_BASE_URL + "roles/<role_id>/services/<service_id>/permissions"
export const SERVICES_LIST = USER_BASE_URL + "services/list"
export const SERVICE = USER_BASE_URL + "services"



