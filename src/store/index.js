import { defineStore } from "pinia";

// firstName: "",
// lastName: "",
// phone: "",
// stdNumber: null,
var count = 1;

export const useGeneralStore = defineStore("general", {
  state: () => {
    return {
      users: [],
      editingIndex: "",
      editedData: {},
      editingItem: {},
      showEditingModal: false,
      removingIndex: 0,
      showRemovingModal: false,
    };
  },
  actions: {
    setModalName(type) {
      this.activeModalName = type;
      this.openModal = true;
    },
    closeModal() {
      this.activeModalName = "";
      this.openModal = false;
    },
    addUser(user) {
      user.id = count++;
      this.users.push(user);
    },
    trackEditingItem(index, item) {
      this.editingIndex = index;
      this.editingItem = item;
      this.showEditingModal = true;
    },
    editUser(item) {
      const temp = {
        firstName: item.firstName,
        lastName: item.lastName,
        phone: item.phone,
        studentNumber: item.studentNumber,
        id: item.id
      };
      this.users.splice(this.editingIndex, 1, temp);
      this.closeEditModal();
    },
    closeEditModal() {
      this.showEditingModal = false;
    },
    showRemoveModal(index) {
      this.showRemovingModal = true;
    },
    closeRemoveModal() {
      this.showRemovingModal = false;
    },
    removeItem(index) {
      this.removingIndex = index;
      this.users.splice(this.removingIndex, 1);
      this.showRemovingModal = false;
    },
  },
});
