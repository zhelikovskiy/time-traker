import Store from 'electron-store';

const store = new Store({ name: 'time-tracker' });

const saveOne = (key: string, value: any) => store.set(`tasks.${key}`, value);
const getOne = (key: string) => store.get(`tasks.${key}`);
const getAll = () => store.get('tasks');
const updateOne = (key: string, value: any) => {
	store.set(`tasks.${key}`, value);
};
const deleteOne = (key: string) => {
	store.delete(`tasks.${key}`);
};

export default { saveOne, getOne, getAll, updateOne, deleteOne };
