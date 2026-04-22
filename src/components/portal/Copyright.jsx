export function Copyright(props) {
  return (
    <p className="text-center text-sm text-white/70" {...props}>
      Copyright ©{" "}
      <a
        className="font-semibold text-white transition hover:text-[#adb9df]"
        href="https://grupodetk.com.br/"
        target="_blank"
        rel="noreferrer"
      >
        Grupo DETK
      </a>{" "}
      {new Date().getFullYear()}.
    </p>
  );
}