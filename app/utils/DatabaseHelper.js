class DatabaseHelper {
  getUsersSingleGoalPath (userId, goalId) {
    return `users-goals/${userId}/${goalId}`
  }
  getUserGoalsPath (userId) {
    return `users-goals/${userId}`
  }

  getGoalActions (goalId) {
    return `goals_actions/${goalId}`
  }
  getGoalAction (goalId, actionId) {
    return `goals_actions/${goalId}/${actionId}`
  }
}

export default new DatabaseHelper()