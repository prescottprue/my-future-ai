class DatabaseHelper {
  getUsersSingleGoalPath (goalId) {
    return `goals/${goalId}`
  }

  getGoals () {
    return `goals`
  }

  getUserGoalsPath (userId) {
    return `goals#orderByChild=uid&equalTo=${userId}`
  }

  getGoalActions (goalId) {
    return `actions#orderByChild=gid&equalTo=${goalId}`
  }

  getGoalAction (goalId, actionId) {
    return `actions/${actionId}`
  }

  getUserProfile (userId) {
    return `users/${userId}`
  }
}

export default new DatabaseHelper()