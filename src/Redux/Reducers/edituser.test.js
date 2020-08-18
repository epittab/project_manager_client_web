import edituser  from './edituser'
//only pure functions

let testInit = {
    cost: 0.00,
    form_cost: 0.00,
    first_name: '',
    last_name: '',
    username: '',
    form: {
        first_name: '',
        last_name: '',
        password: '',
        username: ''
    },
    isEditingUser: false,
    isEditingUserCost: false
}


//set up test suite with describe method => descriptive string, callback
describe ( 'edituser', () => {

    // it method 
    it ('handles @@INIT', () => {

        // invoke reducer with state ( undefined at first) and action ( in an object with type key)
        let result = edituser(undefined, {type: "@@INIT"})
        expect(result).toEqual(testInit)

    })



})