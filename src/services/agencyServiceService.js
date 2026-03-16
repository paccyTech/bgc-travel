import api from './api';

class AgencyServiceService {
    getAllActiveServices() {
        return api.get('/services').then(res => res.data);
    }

    getServicesByCategory(category) {
        return api.get(`/services/category/${category}`).then(res => res.data);
    }

    getServiceById(id) {
        return api.get(`/services/${id}`).then(res => res.data);
    }

    createService(serviceData) {
        return api.post('/services', serviceData).then(res => res.data);
    }

    updateService(id, serviceData) {
        return api.put(`/services/${id}`, serviceData).then(res => res.data);
    }

    deleteService(id) {
        return api.delete(`/services/${id}`).then(res => res.data);
    }
}

export default new AgencyServiceService();
