

const get25cars = async () => {
            
        try {
            const response = await fetch('/api/all')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()
            return data

        } catch (error) {
            console.error('Error: ', error)
            throw error;
        
        }
}


const Vehicles = {
    get25cars
}

export default Vehicles