"use client";

import { useForm } from "react-hook-form";
import FormInput from "@/components/auth/FormInput";
import SubmitButton from "@/components/auth/SubmitButton";

interface AddressFormValues {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isDefault: boolean;
}

export default function AddressForm({
  defaultValues,
}: {
  defaultValues?: Partial<AddressFormValues>;
}) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormValues>({
    defaultValues: defaultValues || {
      country: "United States",
      isDefault: false,
    },
  });

  const onSubmit = (data: AddressFormValues) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormInput
          id="name"
          label="Full Name"
          type="text"
          required
          defaultValue={defaultValues?.name}
          register={register}
          error={errors.name}
        />
        <FormInput
          id="phone"
          label="Phone Number"
          type="tel"
          required
          defaultValue={defaultValues?.phone}
          register={register}
          error={errors.phone}
        />
      </div>

      <FormInput
        id="address"
        label="Street Address"
        type="text"
        required
        defaultValue={defaultValues?.address}
        register={register}
        error={errors.address}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <FormInput
          id="city"
          label="City"
          type="text"
          required
          defaultValue={defaultValues?.city}
          register={register}
          error={errors.city}
        />
        <FormInput
          id="state"
          label="State/Province"
          type="text"
          defaultValue={defaultValues?.state}
          required
          register={register}
          error={errors.state}
        />
        <FormInput
          id="zip"
          label="ZIP/Postal Code"
          type="text"
          defaultValue={defaultValues?.zip}
          register={register}
          error={errors.zip}
        />
      </div>

      <FormInput
        id="country"
        defaultValue={defaultValues?.country}
        label="Country"
        type="text"
        required
        register={register}
        error={errors.country}
      />

      <div className="flex items-center">
        <input
          id="isDefault"
          type="checkbox"
          defaultChecked={defaultValues?.isDefault}
          className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
          {...register("isDefault")}
        />
        <label
          htmlFor="isDefault"
          className="block ml-2 text-sm text-gray-700 dark:text-gray-300"
        >
          Set as default shipping address
        </label>
      </div>

      <div className="pt-4">
        <SubmitButton>Save Address</SubmitButton>
      </div>
    </form>
  );
}
