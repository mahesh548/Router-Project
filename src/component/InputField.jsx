export default function InputField({
  value,
  onChange,
  error,
  label,
  name,
  placeholder,
}) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <input
        type="text"
        className="input w-100"
        placeholder={placeholder || "Type here"}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && <p className="label text-error">{error}</p>}
    </fieldset>
  );
}
