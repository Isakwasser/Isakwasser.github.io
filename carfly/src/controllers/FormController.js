export default {
    data() {
        return {
            startDate: undefined,
            startTime: undefined,
            endDate: undefined,
            endTime: undefined,
        };
    },
    methods: {
        submit() {
            alert(`Въезд: ${this.startDate}. ${this.startTime}\nВыезд: ${this.endDate}. ${this.endTime}`);
            return false;
        },
    },
}