var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AppAvailability = /** @class */ (function (_super) {
    __extends(AppAvailability, _super);
    function AppAvailability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppAvailability.prototype.check = function (app) { return cordova(this, "check", {}, arguments); };
    AppAvailability.pluginName = "AppAvailability";
    AppAvailability.plugin = "cordova-plugin-appavailability";
    AppAvailability.pluginRef = "appAvailability";
    AppAvailability.repo = "https://github.com/ohh2ahh/AppAvailability";
    AppAvailability.platforms = ["Android", "iOS"];
    AppAvailability = __decorate([
        Injectable()
    ], AppAvailability);
    return AppAvailability;
}(IonicNativePlugin));
export { AppAvailability };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1hdmFpbGFiaWxpdHkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBeUNuQyxtQ0FBaUI7Ozs7SUFRcEQsK0JBQUssYUFBQyxHQUFXOzs7Ozs7SUFSTixlQUFlO1FBRDNCLFVBQVUsRUFBRTtPQUNBLGVBQWU7MEJBMUM1QjtFQTBDcUMsaUJBQWlCO1NBQXpDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBcHAgQXZhaWxhYmlsaXR5XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gY2hlY2sgaWYgYW4gYXBwIGlzIGluc3RhbGxlZCBvbiB0aGUgdXNlcidzIGRldmljZS4gSXQgcmVxdWlyZXMgYW4gVVJJIFNjaGVtZSAoZS5nLiB0d2l0dGVyOi8vKSBvbiBpT1Mgb3IgYSBQYWNrYWdlIE5hbWUgKGUuZyBjb20udHdpdHRlci5hbmRyb2lkKSBvbiBBbmRyb2lkLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1hcHBhdmFpbGFiaWxpdHkuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtBcHBBdmFpbGFiaWxpdHkgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9vaGgyYWhoL0FwcEF2YWlsYWJpbGl0eSkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBBdmFpbGFiaWxpdHkgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC1hdmFpbGFiaWxpdHkvbmd4JztcbiAqIGltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhcHBBdmFpbGFiaWxpdHk6IEFwcEF2YWlsYWJpbGl0eSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGxldCBhcHA7XG4gKlxuICogaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpKSB7XG4gKiAgIGFwcCA9ICd0d2l0dGVyOi8vJztcbiAqIH0gZWxzZSBpZiAodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XG4gKiAgIGFwcCA9ICdjb20udHdpdHRlci5hbmRyb2lkJztcbiAqIH1cbiAqXG4gKiB0aGlzLmFwcEF2YWlsYWJpbGl0eS5jaGVjayhhcHApXG4gKiAgIC50aGVuKFxuICogICAgICh5ZXM6IGJvb2xlYW4pID0+IGNvbnNvbGUubG9nKGFwcCArICcgaXMgYXZhaWxhYmxlJyksXG4gKiAgICAgKG5vOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhhcHAgKyAnIGlzIE5PVCBhdmFpbGFibGUnKVxuICogICApO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwQXZhaWxhYmlsaXR5JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwYXZhaWxhYmlsaXR5JyxcbiAgcGx1Z2luUmVmOiAnYXBwQXZhaWxhYmlsaXR5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9vaGgyYWhoL0FwcEF2YWlsYWJpbGl0eScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcEF2YWlsYWJpbGl0eSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGFuIGFwcCBpcyBhdmFpbGFibGUgb24gZGV2aWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcHAgUGFja2FnZSBuYW1lIG9uIGFuZHJvaWQsIG9yIFVSSSBzY2hlbWUgb24gaU9TXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjaGVjayhhcHA6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=