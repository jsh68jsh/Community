import * as enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

var localStorageMock = (function() {
	var store = {};
	return {
		getItem: function(key) {
			return store[key];
		},
		setItem: function(key, value) {
			store[key] = value.toString();
		},
		clear: function() {
			store = {};
		},
		removeItem: function(key) {
			delete store[key];
		},
	};
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });
