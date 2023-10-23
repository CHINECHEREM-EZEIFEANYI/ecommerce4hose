
const catalogService = require('./catalogService'); // Replace with your actual catalog service module

const searchCatalog = async (req, res) => {
    try {
        const { pagingOptions, searchTerm, categoryIds, sortRule } = req.body;

        // Call your catalog service to perform the search
        const results = await catalogService.searchCatalog(pagingOptions, searchTerm, categoryIds, sortRule);

        // Send the search results as a JSON response
        res.status(200).json({ success: true, results });
    } catch (error) {
        console.error('Error in searchCatalog controller:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

module.exports = {
    searchCatalog,
};

