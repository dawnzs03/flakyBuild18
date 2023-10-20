package cn.tuyucheng.taketoday.factory_pattern.abstract_factory;

public class FutureVehicleCorporation extends Corporation {
	@Override
	public MotorVehicle createMotorVehicle() {
		return new FutureVehicleMotorcycle();
	}

	@Override
	public ElectricVehicle createElectricVehicle() {
		return new FutureVehicleElectricCar();
	}
}