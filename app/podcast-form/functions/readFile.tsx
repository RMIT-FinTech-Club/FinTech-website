function readFile(ref: any, file: File) {
	if (ref.current?.src) {
		ref.current.src = "";
	}
	if (file instanceof Blob) {
		const reader = new FileReader();
		reader.onload = () => {
			if (ref.current) {
				ref.current.src = reader.result;
			}
		};
		reader.readAsDataURL(file);
	}
}
export default readFile;
