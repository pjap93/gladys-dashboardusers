/**
 * Policies rules
 * @doc http://sailsjs.org/documentation/concepts/Policies
 */

module.exports.policies = {
  DashboardUsersController: ['checkToken']
};
