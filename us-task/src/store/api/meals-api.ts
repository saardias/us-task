
const timeout = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const sleep = async (ms: number) => {
    await timeout(ms);
    return true;
}

const mockFetchLists = async (): Promise<{ status: number, data: any, error?: any }> => {
    await sleep(3000);
    return {
        status: 200,
        data: {
            first: firstMeals,
            main: mainMeals,
            desert: desertMeals
        }
    }
};

const fetchMeals = async () => {
    try {
        let url = '/meals'
        const { status, data, error } = await mockFetchLists();
        return { data: data, status: status, error: error };
    }
    catch (error: any) {
        let message = error?.response?.data?.error || 'Some error happen, please try again.';
        let status = error?.response?.status || 0;
        return {
            error: {
                message, status
            }
        };
    }
}


const mealsApi = {
    fetchMeals
}

export default mealsApi;

const firstMeals = [
    { label: 'Green salad' },
    { label: 'Soup' },
    { label: 'Crispy Garlic Dip' },
    { label: 'Sausage Balls' },
    { label: 'Bagel-Spiced Cheese Puffs' },
    { label: 'Baked Vegetable Egg Rolls' },
    { label: 'Stuffed Grape Leaves' },
    { label: 'Mushroom Puffs' },
    { label: 'Curly Fries' },
    { label: 'Carnitas Egg Rolls' },
    { label: 'Coconut Curry Puffs' },
    { label: 'Tzatziki Sauce' },
    { label: 'Reggiano Cups' },
    { label: 'Crab Cakesup' }
];

const mainMeals = [
    { label: 'Green salad' },
    { label: 'Double-Stack Mushroom and Chicken Cheeseburgers' },
    { label: 'Habanero BBQ Shrimp' },
    { label: 'Grilled Pork Spareribs With Soda Bottle Barbecue Sauce' },
    { label: 'Caesar Salad Roast Chicken' },
    { label: 'Gado Gado' },
    { label: 'Fish Tacos' },
    { label: 'Instant Pot Lamb Haleem' },
    { label: 'Pozole Verde Con Hongos' },
    { label: 'Turmeric Chicken With Toum' },
    { label: 'Roasted Salmon With Green Herbs' }
];

const desertMeals = [
    { label: 'Apple Pie' },
    { label: 'Cherry Pie' },
    { label: 'Lemon Tart' },
    { label: 'Pistachio Phirni' },
    { label: 'Fudgy Chewy Brownies' },
    { label: 'Coconut Kheer' },
    { label: 'Chocolate Coffee Truffle' },
    { label: 'Eggless Chocolate Mousse' },
    { label: 'Ice Cream' },
    { label: 'Chees Cake' }
];