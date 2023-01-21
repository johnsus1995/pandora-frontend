class User {
  constructor(user = {}) {
    this.id = user.id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.phone = user.phone;
    this.status = user.status;
    this.date_created = user.date_created;
    this.permissions = user?.permissions || [];
  }
  fullName() {
    return `${this.first_name} ${this.last_name || ""}`;
  }
  getRoleName() {
    return this.roles?.[0]?.name || "Unknown";
  }
  hasPermission(permission) {
    return this.permissions.includes(permission);
  }
}

export default User;
