function changeAdminSettings(userData) {
    return {
        type: 'CHANGE_ADMIN_SETTINGS',
        payload: userData
    }
}

let adminData = {
    username: 'Admin Jora',
    token_a: 'y08fh3jyvlm09cpa9958uv'
};

// Current logged in user data
function setAdminData() {
    return {
        type: 'SET_ADMIN_DATA',
        payload: adminData
    }
}

export {
    setAdminData,
    changeAdminSettings
}