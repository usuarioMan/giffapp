export function sanitizeInput(input) {
    // TODO: Prevent SQL or NoSQL injections
    if(input.trim().lenght <= 0) return null;
    return input
  }

export function doesCategoryExist(categories, newCategory) {
    if (categories.includes(newCategory.trim())) return true;
    return false;
}
