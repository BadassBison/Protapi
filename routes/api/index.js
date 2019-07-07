const data = {
    routes: [
        "employees",
        "customers"
    ],
    parse: parseTypes
}

function parseTypes(route, req, res) {
    let newEntry;
    switch(route){
        case 'employees':
            newEntry = {
                name: req.body.name,
                email: req.body.email,
                position: req.body.position || "employee"
            }
        
            if(!newEntry.name || !newEntry.email) {
                return res.status(400).json({ msg: 'Please include a name and email' });
            }

        case 'customers':
            newEntry = {
                name: req.body.name,
                email: req.body.email,
            }
        
            if(!newEntry.name || !newEntry.email) {
                return res.status(400).json({ msg: 'Please include a name and email' });
            }
    }

    return newEntry;
}

module.exports = data;