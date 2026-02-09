
import "iconify-icon";

export interface IIconify_Props extends Lestin.HTMLAttributes<HTMLElement> {
	icon: string;
	class?: string;

	width?: string | number;
	height?: string | number;
	inline?: boolean;
}

/**
 * Renders a Iconify icon.
 *
 * @param {IIconify_Props} props - The props for the Iconify component.
 * @returns {JSX.Element} The rendered Iconify icon.
 */
export function Iconify(props: IIconify_Props): HTMLElement {
	return (
		//@ts-expect-error
		<iconify-icon
			{...props}
			class={props.class}
			width={props.width}
			height={props.height}
			icon={props.icon}
			inline={props.inline}
		>
			{/* @ts-expect-error */}
		</iconify-icon>
	);
}

export function RefreshAllIconifyIcons() {
	const icons = document.querySelectorAll("iconify-icon");
	icons.forEach((icon) => {
		const iconName = icon.getAttribute("icon");
		if (iconName) {
			icon.setAttribute("icon", iconName);
		}
	});
}
