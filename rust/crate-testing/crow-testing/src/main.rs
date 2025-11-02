use crow::{
    glutin::{
        event::{Event, WindowEvent},
        event_loop::{ControlFlow, EventLoop},
        window::WindowBuilder,
    },
    Context, DrawConfig, Texture,
};

fn main() -> Result<(), crow::Error> {

    println!("Current working dir: {:?}", std::env::current_dir());
    println!("Trying to load: ./textures/player.png");
    // rest of your code...

    
    let event_loop = EventLoop::new();
    let mut ctx = Context::new(WindowBuilder::new(), &event_loop)?;

    let texture = Texture::load(&mut ctx, "C:/Users/mk281/Desktop/web 3/rust/crate-testing/crow-testing/textures/cat.png")?;

    event_loop.run(
        move |event: Event<()>, _window_target: _, control_flow: &mut ControlFlow| match event {
            Event::WindowEvent {
                event: WindowEvent::CloseRequested,
                ..
            } => *control_flow = ControlFlow::Exit,
            Event::MainEventsCleared => ctx.window().request_redraw(),
            Event::RedrawRequested(_) => {
                let mut surface = ctx.surface();
                ctx.clear_color(&mut surface, (1.4, 4.4, 5.8, 8.0));
                ctx.draw(&mut surface, &texture, (100, 150), &DrawConfig::default());
                ctx.present(surface).unwrap();
            }
            _ => (),
        },
    )
}
