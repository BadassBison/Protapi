const data = {
    routes: [
        "employees",
        "customers",
        "partners"
    ],
    parse: parseTypes
}

function parseTypes(route, req, res) {
    let newEntry;
    switch(route){
        
        // Employees schema
        case 'employees':
            newEntry = {
                name: req.body.name,
                email: req.body.email,
                position: req.body.position || "employee"
            }
        
            if(!newEntry.name || !newEntry.email) {
                return res.status(400).json({ msg: 'Please include a name and email' });
            }

        // Customers schema
        case 'customers':
            newEntry = {
                name: req.body.name,
                email: req.body.email,
            }
        
            if(!newEntry.name || !newEntry.email) {
                return res.status(400).json({ msg: 'Please include a name and email' });
            }

        // Partners schema
        case 'partners':
            newEntry = {
                name: req.body.name,
                email: req.body.email,
                company: req.body.company
            }

            if(!newEntry.name || !newEntry.email || !newEntry.company) {
                return res.status(400).json({ msg: 'Please include a name, email, and company'});
            }
    }

    return newEntry;
}

module.exports = data;